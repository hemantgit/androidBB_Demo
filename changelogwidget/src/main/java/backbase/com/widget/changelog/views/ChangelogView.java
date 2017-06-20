package backbase.com.widget.changelog.views;

import com.backbase.android.rendering.android.NativeView;

import backbase.com.widget.changelog.views.adapters.ChangelogAdapter;

public interface ChangelogView extends NativeView<ChangelogContract> {
    void showProgressBar();
    void hideProgressBar();
    void showError(String message);
    void reload(ChangelogAdapter adapter);
}