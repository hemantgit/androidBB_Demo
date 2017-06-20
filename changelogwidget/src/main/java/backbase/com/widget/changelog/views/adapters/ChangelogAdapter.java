package backbase.com.widget.changelog.views.adapters;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;
import android.widget.LinearLayout;
import android.widget.TextView;

import java.util.List;

import backbase.com.widget.changelog.models.ChangelogItem;
import backbase.com.widget.changelog.R;

/**
 * Created by Backbase R&D B.V on 21/06/16.
 */
public class ChangelogAdapter extends ArrayAdapter<ChangelogItem> {

    private List<ChangelogItem> items;

    public ChangelogAdapter(Context context, List<ChangelogItem> items) {
        super(context, 0, items);
        this.items = items;
    }


    @Override
    public View getView(int position, View convertView, ViewGroup parent){
        ViewHolder holder;
        ChangelogItem changelogItem = getItem(position);

        if (convertView == null) {
            convertView = LayoutInflater.from(getContext()).inflate(R.layout.changelog_row, parent, false);

            holder = new ViewHolder();

            holder.dateTextView = ((TextView) convertView.findViewById(R.id.date_text));
            holder.featuresLayout = (LinearLayout) convertView.findViewById(R.id.features_layout);
            holder.versionTextView = ((TextView) convertView.findViewById(R.id.version_text));

            convertView.setTag(holder);

        }else{
            holder = (ViewHolder) convertView.getTag();
        }

        holder.featuresLayout.removeAllViews();
        for(ChangelogItem.ChangelogFeatures feature : changelogItem.getItems()){
            TextView textView = new TextView(getContext());
            textView.setText((feature.getName()));
            textView.setCompoundDrawablesWithIntrinsicBounds(
                    R.drawable.ic_check, 0, 0, 0);
            textView.setPadding(5,2,0,2);
            holder.featuresLayout.addView(textView);
        }

        holder.versionTextView.setText("Version "+changelogItem.getName());
        holder.dateTextView.setText(changelogItem.getDate());

        return convertView;
    }


    private static class ViewHolder {
        TextView versionTextView;
        TextView dateTextView;
        LinearLayout featuresLayout;
    }


}
