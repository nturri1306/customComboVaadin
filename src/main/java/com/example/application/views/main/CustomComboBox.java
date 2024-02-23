package com.example.application.views.main;


import com.vaadin.flow.component.Component;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;

import java.util.List;


@Tag("custom-combo-box")
@JsModule("custom-combo-box.js")
public class CustomComboBox extends Component {

    public void setItems(List<String> items) {
        StringBuilder script = new StringBuilder("this.setItems([");
        for (int i = 0; i < items.size(); i++) {
            script.append("\"").append(items.get(i)).append("\"");
            if (i < items.size() - 1) {
                script.append(",");
            }
        }
        script.append("]);");
        getElement().executeJs(script.toString());
    }

}
