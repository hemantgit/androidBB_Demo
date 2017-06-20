package backbase.com.templatedrawer;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.FrameLayout;
import android.widget.LinearLayout;
import android.widget.ScrollView;

import com.backbase.android.rendering.BBRenderer;
import com.backbase.android.model.Renderable;
import com.backbase.android.rendering.Renderer;
import com.backbase.android.rendering.inner.RendererListener;

import org.json.JSONObject;


/**
 * Created by Backbase R&D B.V on 16/06/16.
 */
public class SimplePage extends LinearLayout implements Renderer{

    private final LayoutInflater inflater;
    private final Context context;
    BBRenderer renderer;
    LinearLayout linearLayout;
    private ScrollView scrollView;
    private Renderable renderable;

    public SimplePage(Context context) {
        super(context);
        this.context = context;
        inflater = (LayoutInflater)context.getSystemService(Context.LAYOUT_INFLATER_SERVICE);
        renderer = new BBRenderer(context);
    }


    @Override
    public void start(Renderable renderable, ViewGroup viewGroup) {
        this.renderable = renderable;
        View layout = inflate(getContext(), R.layout.vertical_layout, viewGroup);

        linearLayout = (LinearLayout) layout.findViewById(R.id.vertical);
        for(Renderable child: renderable.getChildren()){

            FrameLayout frameLayout = new FrameLayout(context);
            FrameLayout.LayoutParams layoutParams = new FrameLayout.LayoutParams(FrameLayout.LayoutParams.WRAP_CONTENT, FrameLayout.LayoutParams.WRAP_CONTENT);
            frameLayout.setLayoutParams(layoutParams);
            renderer.start(child, frameLayout);
            linearLayout.addView(frameLayout);
        }
    }

    @Override
    public void load(Context context, Renderable renderable, ViewGroup viewGroup) {

    }

    @Override
    public void preload(Renderable renderable) {

    }

    @Override
    public void startWithPreload(Renderable renderable, ViewGroup viewGroup) {

    }

    @Override
    public void startPreloadNotifications(Renderable renderable, boolean b) {

    }

    @Override
    public void pause() {
        renderer.pause();
    }

    @Override
    public void resume() {
        renderer.resume();
    }

    @Override
    public void destroy() {
        renderer.destroy();
    }

    @Override
    public void destroy(long delay) {
        renderer.destroy(delay);
    }

    @Override
    public void clean() {
        renderer.clean();
    }

    @Override
    public void stop() {

    }

    @Override
    public int getRendererWidth() {
        return renderer.getRendererWidth();
    }

    @Override
    public int getRendererHeight() {
        return renderer.getRendererHeight();
    }

    @Override
    public void moveTo(int i) {

    }

    @Override
    public void scaleTo(int i, int i1) {

    }

    @Override
    public void dispatchEvent(String s, JSONObject jsonObject) {

    }

    @Override
    public void setRendererListener(RendererListener rendererListener) {

    }

    @Override
    public void enableScrolling(boolean b) {

    }

    @Override
    public Renderable getRenderableItem() {
        return renderable;
    }
}
