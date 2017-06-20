package backbase.com.templatedrawer;

import android.app.Application;

import com.backbase.android.Backbase;
import com.backbase.android.rendering.BBRenderer;

import backbase.com.widget.changelog.views.ChangelogWidget;

public class BackbaseApplication extends Application {

    private static String configFilePath = "backbase/conf/configs-android.json";

    @Override
    public void onCreate() {
        super.onCreate();
        Backbase.setLogLevel(Backbase.LogLevel.DEBUG);
        Backbase.initialize(this, configFilePath, false);
        BBRenderer.registerRenderer(ChangelogWidget.class);
        BBRenderer.registerRenderer(SimplePage.class);

    }

}
