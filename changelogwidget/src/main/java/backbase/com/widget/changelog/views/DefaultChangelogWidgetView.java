package backbase.com.widget.changelog.views;

import android.content.Context;
import android.view.View;
import android.view.ViewGroup;
import android.widget.AdapterView;
import android.widget.ImageButton;
import android.widget.ListView;
import android.widget.ProgressBar;
import android.widget.RelativeLayout;

import backbase.com.widget.changelog.R;
import backbase.com.widget.changelog.views.adapters.ChangelogAdapter;

public class DefaultChangelogWidgetView extends View implements ChangelogView, AdapterView.OnItemClickListener, View.OnClickListener {

    private ListView changelogListView;
    private ChangelogContract contract;
    public ProgressBar progressBar;
    private RelativeLayout errorLayout;
    private ImageButton refreshButton;

    public DefaultChangelogWidgetView(Context context) {
        super(context);
    }

    @Override
    public void init(ChangelogContract ChangelogContract, ViewGroup viewGroup) {
        View inflatedView = inflate(getContext(), R.layout.changelog_list, viewGroup);
        changelogListView = (ListView) inflatedView.findViewById(R.id.changelog_list);
        progressBar = (ProgressBar) inflatedView.findViewById(R.id.progressBar);
        errorLayout = (RelativeLayout) inflatedView.findViewById(R.id.emptyLayout);
        refreshButton = (ImageButton) inflatedView.findViewById(R.id.refreshButton);

        changelogListView.setOnItemClickListener(this);
        contract = ChangelogContract;
        refreshButton.setOnClickListener(this);
    }

    public void showProgressBar(){
        progressBar.setVisibility(View.VISIBLE);
    }
    public void hideProgressBar(){
        progressBar.setVisibility(View.GONE);
    }

    public void showError(String message){
        progressBar.setVisibility(View.GONE);
        errorLayout.setVisibility(View.VISIBLE);
    }
    public void reload(ChangelogAdapter adapter){
        showProgressBar();
        changelogListView.setAdapter(adapter);
    }

    @Override
    public void onClick(View v) {
        showProgressBar();
        errorLayout.setVisibility(View.GONE);
        contract.retrieveChangelogItems();
    }

    @Override
    public void onItemClick(AdapterView<?> parent, View view, int position, long id) {
        contract.didSelectItemAtPosition(position);
    }

    @Override
    public void onPause()  {
        changelogListView.setVisibility(View.GONE);
    }

    @Override
    public void onResume() {
        changelogListView.setVisibility(View.VISIBLE);
    }

    @Override
    public void onDestroy() {

    }
}