package backbase.com.widget.changelog.models;

import java.util.List;

/**
 * Created by Backbase R&D B.V on 21/06/16.
 */
public class ChangelogItem implements Comparable<ChangelogItem>{

    String versionName;
    String releaseDate;
    List<ChangelogFeatures> features;

    public String getName() {
        return versionName;
    }

    public String getDate() {
        return releaseDate;
    }

    public List<ChangelogFeatures> getItems() {
        return features;
    }

    public class ChangelogFeatures {

        String name;
        String icon;
        String description;

        public String getName() {
            return this.name;
        }

        public String getIcon() {
            return icon;
        }

        public String getDescription() {
            return description;
        }


    }

    @Override
    public int compareTo(ChangelogItem otherChangeLog) {
        String[] thisVersion = this.getName().split("\\.");
        String[] otherVersion = otherChangeLog.getName().split("\\.");
        int i = 0;
        while (i < thisVersion.length && i < otherVersion.length && thisVersion[i].equals(otherVersion[i])) {
            i++;
        }

        if (i < thisVersion.length && i < otherVersion.length) {
            int diff = Integer.valueOf(thisVersion[i]).compareTo(Integer.valueOf(otherVersion[i]));
            return Integer.signum(diff);
        }
        return Integer.signum(thisVersion.length - otherVersion.length);
    }
}
