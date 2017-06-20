package backbase.com.templatedrawer;

import android.app.Application;

import com.backbase.android.Backbase;
import com.backbase.android.rendering.BBRenderer;


public class BackbaseApplication extends Application {

    private static String configFilePath = "backbase/conf/configs-android.json";

    @Override
    public void onCreate() {
        super.onCreate();
        Backbase.setLogLevel(Backbase.LogLevel.DEBUG);
        Backbase.initialize(this, configFilePath, false);
        BBRenderer.registerRenderer(SimplePage.class);

    }

}
