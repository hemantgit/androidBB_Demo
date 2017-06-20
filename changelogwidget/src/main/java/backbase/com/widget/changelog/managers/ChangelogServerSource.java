package backbase.com.widget.changelog.managers;

import com.backbase.android.Backbase;
import com.backbase.android.content.BBContentItem;
import com.backbase.android.listeners.ContentListener;
import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;

import org.json.JSONException;
import org.json.JSONObject;

import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import backbase.com.widget.changelog.interfaces.ChangelogSource;
import backbase.com.widget.changelog.interfaces.ChangelogSourcesListener;
import backbase.com.widget.changelog.models.ChangelogItem;

/**
 * Created by Backbase R&D B.V on 12/07/16.
 */
public class ChangelogServerSource implements ChangelogSource, ContentListener {


    private ChangelogSourcesListener listener;
    Backbase cxpInstance;

    @Override
    public void getChangelog(String dataSource, ChangelogSourcesListener listener) {
        this.listener = listener;
        cxpInstance = Backbase.getInstance();
        cxpInstance.getContentByPath(dataSource, "contentRepository", this);
    }

    @Override
    public void onSuccess(BBContentItem cxpStructuredContent) {


        try {
            Type listType = new TypeToken<ArrayList<ChangelogItem>>() {}.getType();
            List<ChangelogItem> changelogList = new Gson().fromJson(cxpStructuredContent.getJSON().get("versions").toString(), listType);
            Collections.sort(changelogList);
            Collections.reverse(changelogList);
            listener.onSuccess(changelogList);
        } catch (JSONException e) {
            e.printStackTrace();
            listener.onError(e.getMessage());
        }


    }

    @Override
    public void onError(String stringMessage) {
        listener.onError(stringMessage);
    }
}
