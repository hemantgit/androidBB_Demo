package backbase.com.widget.changelog.interfaces;

import backbase.com.widget.changelog.interfaces.ChangelogSourcesListener;

/**
 * Created by Backbase R&D B.V on 12/07/16.
 */
public interface ChangelogSource {

    void getChangelog(String dataSource, ChangelogSourcesListener listener);

}
