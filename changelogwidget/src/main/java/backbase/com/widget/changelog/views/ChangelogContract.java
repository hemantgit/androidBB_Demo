package backbase.com.widget.changelog.views;

import com.backbase.android.rendering.android.NativeContract;

public interface ChangelogContract extends NativeContract {
    void retrieveChangelogItems();
    void didSelectItemAtPosition(int position);
}