package com.risee;

import android.os.Bundle;
import android.content.Intent;
import com.facebook.react.ReactActivity;
import android.content.res.Configuration;

public class MainActivity extends ReactActivity {
  // @Override
  // protected void onCreate(Bundle savedInstanceState) {
  //   super.onCreate(null);
  // }

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "TestRN";
  }

  @Override
    public void onConfigurationChanged(Configuration newConfig) {
        super.onConfigurationChanged(newConfig);
        Intent intent = new Intent("onConfigurationChanged");
        intent.putExtra("newConfig", newConfig);
        this.sendBroadcast(intent);
    }
}
