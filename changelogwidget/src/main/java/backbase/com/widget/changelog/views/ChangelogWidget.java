package backbase.com.widget.changelog.views;

import android.content.Context;
import android.view.ViewGroup;

import com.backbase.android.Backbase;
import com.backbase.android.model.Renderable;
import com.backbase.android.rendering.android.NativeRenderer;
import com.google.gson.Gson;

import org.json.JSONException;
import org.json.JSONObject;

import java.util.List;

import backbase.com.widget.changelog.interfaces.ChangelogSource;
import backbase.com.widget.changelog.interfaces.ChangelogSourcesListener;
import backbase.com.widget.changelog.managers.ChangelogWidgetSourceFactory;
import backbase.com.widget.changelog.models.ChangelogItem;
import backbase.com.widget.changelog.views.adapters.ChangelogAdapter;

public class ChangelogWidget extends NativeRenderer<ChangelogView> implements ChangelogContract, ChangelogSourcesListener {

    private ChangelogSource changelogDataSource;
    private List<ChangelogItem> changelogItems;
    private final Context context;
    ChangelogView view;
    private Renderable renderable;

    public ChangelogWidget(Context context) {
        this.context = context;
    }

    @Override
    public void start(Renderable renderable, ViewGroup viewGroup) {
        view = initializeView(context, renderable, viewGroup, this);
        this.renderable = renderable;
        retrieveChangelogItems();
    }

    public void retrieveChangelogItems(){
        String dataProvider = this.renderable.getPreference("dataProvider");
        ChangelogWidgetSourceFactory.Sources sources = ChangelogWidgetSourceFactory.Sources.LOCAL;
        if (dataProvider.equals("structured-content")) {
            sources = ChangelogWidgetSourceFactory.Sources.SERVER;
        }

        view.showProgressBar();
        changelogDataSource = ChangelogWidgetSourceFactory.getChangelogSource(context, sources);
        changelogDataSource.getChangelog(this.renderable.getPreference("dataSource"), this);
    }
    public void didSelectItemAtPosition(int position){

        view.showProgressBar();

        String jsonSelectedItem = new Gson().toJson(changelogItems.get(position));
        try {
            JSONObject payload = new JSONObject(jsonSelectedItem);
            Backbase.getInstance().publishEvent("versionClicked", getRenderableItem().getId(), payload);
            view.hideProgressBar();
        } catch (JSONException e) {
            e.printStackTrace();
        }
    }

    @Override
    public void onSuccess(List<ChangelogItem> items) {
        changelogItems = items;
        view.reload(new ChangelogAdapter(context, items));
        view.hideProgressBar();
    }

    @Override
    public void onError(String errorMessage) {
        view.showError(errorMessage);
    }

    @Override
    public Renderable getRenderable() {
        return this.getRenderableItem();
    }
}