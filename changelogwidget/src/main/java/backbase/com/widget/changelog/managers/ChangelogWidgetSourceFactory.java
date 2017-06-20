package backbase.com.widget.changelog.managers;

import android.content.Context;


import backbase.com.widget.changelog.interfaces.ChangelogSource;

/**
 * Created by Backbase R&D B.V on 12/07/16.
 */
public class ChangelogWidgetSourceFactory {

    public enum Sources{SERVER,LOCAL}

    public static ChangelogSource getChangelogSource(Context context, Sources sources){

        switch (sources){
            case SERVER:
                return new ChangelogServerSource();
            case LOCAL:
                return new ChangelogLocalSource(context);
            default:
                return null;
        }
    }
}
