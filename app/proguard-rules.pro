-keepattributes Signature

# For using GSON @Expose annotation
-keepattributes *Annotation*

-keep class android.support.v7.widget.** { *; }
-keep class android.support.v7.internal.widget.** { *; }
-keep class android.support.v7.internal.view.menu.** { *; }

-keep public class * extends android.support.v4.view.ActionProvider {
    public <init>(android.content.Context);
}

-dontwarn android.webkit.WebView
-dontwarn android.view.*
-dontwarn android.app.**


# Preserve the special static methods that are required in all enumeration classes.
-keepclassmembers enum * {
    public static **[] values();
    public static ** valueOf(java.lang.String);
}
-verbose

-keepattributes JavascriptInterface

-keepclasseswithmembers class * {
 @android.webkit.JavascriptInterface <methods>;
}


-keepclassmembers class * {
    @org.xwalk.core.JavascriptInterface <methods>;
}
-keepclassmembers class * {
    @android.webkit.JavascriptInterface <methods>;
}

-keepattributes InnerClasses

# Android common:
-keep public class * extends android.app.Activity
-keep public class * extends android.app.Application
-keep public class * extends android.app.Service
-keep public class * extends android.content.BroadcastReceiver
-keep public class * extends android.content.ContentProvider
-keep public class android.webkit.** { *; }
-keep class com.commonsware.cwac.** { *; }

-keepattributes SourceFile,LineNumberTable
-keepclassmembers class com.backbase.cxpandroid.rendering.inner.web.CxpWebRenderer { *; }
-keep class com.backbase.cxpandroid.configurations.** { *; }
-keep class com.backbase.cxpandroid.model.** { *; }
-keep class com.backbase.cxpandroid.plugins.storage.** { *; }
-dontwarn com.backbase.**

-keep class backbase.com.widget.** { *; }

##Walk


-keepclassmembers class * {
    static final %                *;
    static final java.lang.String *;
}

-keep public class * extends android.view.View {
    public <init>(android.content.Context);
    public <init>(android.content.Context, android.util.AttributeSet);
    public <init>(android.content.Context, android.util.AttributeSet, int);
    public void set*(...);
}

-keepclasseswithmembers class * {
    public <init>(android.content.Context, android.util.AttributeSet);
}

-keepclasseswithmembers class * {
    public <init>(android.content.Context, android.util.AttributeSet, int);
}

-keepclassmembers class * extends android.content.Context {
   public void *(android.view.View);
   public void *(android.view.MenuItem);
}

-keepclassmembers class * implements android.os.Parcelable {
    static ** CREATOR;
}

-keepattributes InnerClasses
-keep class **.R
-keep class **.R$* {
    <fields>;
}

-adaptresourcefilenames    **.properties,**.gif,**.jpg
-adaptresourcefilecontents **.properties,META-INF/MANIFEST.MF

# Keep native & callbacks
-keepclasseswithmembernames class *{
    native <methods>;
}

-keepattributes JNINamespace
-keepattributes CalledByNative
-keepattributes *Annotation*
-keepattributes EnclosingMethod

# Too many hard code reflections between xwalk wrapper and bridge,so
# keep all xwalk classes.
-keep class org.xwalk.**{ *; }
-keep interface org.xwalk.**{ *; }
-keep class com.example.extension.**{ *; }
-keep class org.crosswalkproject.**{ *; }
-keep class org.crosswalk.engine.** { *; }
-keep class org.chromium.** { *; }
-dontwarn android.view.**
-dontwarn android.media.**
-dontwarn org.chromium.**

# Rules for org.chromium classes:
# Keep annotations used by chromium to keep members referenced by native code
-keep class org.chromium.base.*Native*
-keep class org.chromium.base.annotations.JNINamespace
-keepclasseswithmembers class org.chromium.** {
    @org.chromium.base.AccessedByNative <fields>;
}
-keepclasseswithmembers class org.chromium.** {
    @org.chromium.base.*Native* <methods>;
}

-keep class org.chromium.** {
    native <methods>;
}

# Keep methods used by reflection and native code
-keep class org.chromium.base.UsedBy*
-keep @org.chromium.base.UsedBy* class *
-keepclassmembers class * {
    @org.chromium.base.UsedBy* *;
}

-keep @org.chromium.base.annotations.JNINamespace* class *
-keepclassmembers class * {
    @org.chromium.base.annotations.CalledByNative* *;
}

# Suppress unnecessary warnings.
-dontnote org.chromium.net.AndroidKeyStore
# Objects of this type are passed around by native code, but the class
# is never used directly by native code. Since the class is not loaded, it does
# not need to be preserved as an entry point.
-dontnote org.chromium.net.UrlRequest$ResponseHeadersMap

# Generate by aapt. may only need for testing, just add them here.
-keep class org.chromium.ui.ColorPickerAdvanced { <init>(...); }
-keep class org.chromium.ui.ColorPickerMoreButton { <init>(...); }
-keep class org.chromium.ui.ColorPickerSimple { <init>(...); }

# rxjava
-dontwarn sun.misc.**

-keepclassmembers class rx.internal.util.unsafe.*ArrayQueue*Field* {
   long producerIndex;
   long consumerIndex;
}

-keepclassmembers class rx.internal.util.unsafe.BaseLinkedQueueProducerNodeRef {
    rx.internal.util.atomic.LinkedQueueNode producerNode;
}

-keepclassmembers class rx.internal.util.unsafe.BaseLinkedQueueConsumerNodeRef {
    rx.internal.util.atomic.LinkedQueueNode consumerNode;
}
