package backbase.com.widget.changelog.managers;

import android.content.Context;
import android.content.res.AssetManager;

import com.backbase.android.core.utils.BBConstants;
import com.backbase.android.core.utils.StringUtils;
import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;

import java.io.IOException;
import java.io.InputStream;
import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.List;

import backbase.com.widget.changelog.interfaces.ChangelogSource;
import backbase.com.widget.changelog.interfaces.ChangelogSourcesListener;
import backbase.com.widget.changelog.models.ChangelogItem;

/**
 * Created by Backbase R&D B.V on 12/07/16.
 */
public class ChangelogLocalSource implements ChangelogSource {

    AssetManager assets;

    public ChangelogLocalSource(Context context){
        assets = context.getAssets();
    }


    @Override
    public void getChangelog(String dataSource, ChangelogSourcesListener listener) {

        InputStream stream = null;
        try {
            stream = assets.open(BBConstants.ANDROID_ASSETS_PATH + dataSource);
            String changelogJsonString = new StringUtils().getString(stream);

            Type listType = new TypeToken<ArrayList<ChangelogItem>>() {}.getType();

            List<ChangelogItem> changelogList = new Gson().fromJson(changelogJsonString, listType);

            listener.onSuccess(changelogList);
        }catch (IOException ex){
            ex.printStackTrace();
            listener.onError(ex.getMessage());
        }
    }
}
