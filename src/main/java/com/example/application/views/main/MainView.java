package com.example.application.views.main;


import com.vaadin.flow.component.html.Div;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;


import java.util.UUID;
import java.util.ArrayList;

@PageTitle("Main")
@Route(value = "")
//@JsModule("./src/custom-combo-box.js")
public class MainView extends HorizontalLayout {


    public MainView() {

      /*  CustomComboBox customComboBox = new CustomComboBox();
        customComboBox.setItems(Arrays.asList("Elemento 1", "Elemento 2", "Elemento 3"));
        customComboBox.addValueChangeListener(event -> {
            String selectedValue = event.getValue();
            // Logica per gestire la selezione dell'elemento dalla ComboBox personalizzata
        });

        add(customComboBox);*/

        add(new MyTest("World"));

        add(new Div());

        CustomComboBox customCombo = new CustomComboBox();

        ArrayList<String> list = new ArrayList<>();

        for (int i = 0; i < 100; i++)
            list.add(UUID.randomUUID().toString());


        customCombo.setItems(list);


        add(customCombo);
    }

}
