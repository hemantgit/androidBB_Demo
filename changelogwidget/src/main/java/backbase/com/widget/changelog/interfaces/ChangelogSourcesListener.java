package backbase.com.widget.changelog.interfaces;

import java.util.List;

import backbase.com.widget.changelog.models.ChangelogItem;

/**
 * Created by Backbase R&D B.V on 21/06/16.
 */
public interface ChangelogSourcesListener {

    void onSuccess(List<ChangelogItem> items);
    void onError(String errorMessage);


}
