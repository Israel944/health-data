var wms_layers = [];

var format_AddisAbabakk14_0 = new ol.format.GeoJSON();
var features_AddisAbabakk14_0 = format_AddisAbabakk14_0.readFeatures(json_AddisAbabakk14_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AddisAbabakk14_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AddisAbabakk14_0.addFeatures(features_AddisAbabakk14_0);
var lyr_AddisAbabakk14_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AddisAbabakk14_0, 
                style: style_AddisAbabakk14_0,
                interactive: true,
                title: '<img src="styles/legend/AddisAbabakk14_0.png" /> Addis Ababa kk14'
            });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_ARC_GISWorldImagery_2 = new ol.layer.Tile({
            'title': 'ARC_GIS World Imagery',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://www.arcgis.com/home/webmap/viewer.html?useExisting=1&layers=10df2279f9684e4a9f6a7f08febac2a9'
            })
        });
var format_Selected_Health_Centers_West_3 = new ol.format.GeoJSON();
var features_Selected_Health_Centers_West_3 = format_Selected_Health_Centers_West_3.readFeatures(json_Selected_Health_Centers_West_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Selected_Health_Centers_West_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Selected_Health_Centers_West_3.addFeatures(features_Selected_Health_Centers_West_3);
var lyr_Selected_Health_Centers_West_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Selected_Health_Centers_West_3, 
                style: style_Selected_Health_Centers_West_3,
                interactive: true,
                title: '<img src="styles/legend/Selected_Health_Centers_West_3.png" /> Selected_Health_Centers_West'
            });

lyr_AddisAbabakk14_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_ARC_GISWorldImagery_2.setVisible(true);lyr_Selected_Health_Centers_West_3.setVisible(true);
var layersList = [lyr_AddisAbabakk14_0,lyr_OpenStreetMap_1,lyr_ARC_GISWorldImagery_2,lyr_Selected_Health_Centers_West_3];
lyr_AddisAbabakk14_0.set('fieldAliases', {'R_NAME': 'R_NAME', 'R_CODE': 'R_CODE', 'Z_NAME': 'Z_NAME', 'Z_CODE': 'Z_CODE', 'T_NAME': 'T_NAME', 'T_CODE': 'T_CODE', 'KK_NAME': 'KK_NAME', 'KK_CODE': 'KK_CODE', 'COUNT': 'COUNT', 'Area_ha': 'Area_ha', 'Pop': 'Pop', });
lyr_Selected_Health_Centers_West_3.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID_2': 'OBJECTID_2', 'X': 'X', 'y': 'y', 'Type': 'Type', 'Name': 'Name', 'No': 'No', 'OBJECTID': 'OBJECTID', 'Id': 'Id', 'Embassy_Co': 'Embassy_Co', 'TOWNG_': 'TOWNG_', 'TOWNG_ID': 'TOWNG_ID', 'Rank': 'Rank', 'Name2': 'Name2', 'S_N': 'S_N', 'Region': 'Region', 'Zone': 'Zone', 'Woreda': 'Woreda', 'Health_cen': 'Health_cen', 'R_NAME': 'R_NAME', 'R_CODE': 'R_CODE', 'Z_NAME': 'Z_NAME', 'Z_CODE': 'Z_CODE', 'W_NAME': 'W_NAME', 'W_CODE': 'W_CODE', 'COUNT': 'COUNT', 'Area_in_he': 'Area_in_he', 'ORIG_FID': 'ORIG_FID', 'RK_NAME': 'RK_NAME', 'RK_CODE': 'RK_CODE', 'T_NAME': 'T_NAME', 'T_CODE': 'T_CODE', 'Area_ha': 'Area_ha', 'FIRST_R_NA': 'FIRST_R_NA', 'FIRST_R_CO': 'FIRST_R_CO', 'FIRST_Z_NA': 'FIRST_Z_NA', 'FIRST_Z_CO': 'FIRST_Z_CO', 'FIRST_W_NA': 'FIRST_W_NA', 'FIRST_W_CO': 'FIRST_W_CO', 'FIRST_T_NA': 'FIRST_T_NA', 'FIRST_T_CO': 'FIRST_T_CO', 'FIRST_RK_N': 'FIRST_RK_N', 'SA_CODE': 'SA_CODE', 'EA_NAME': 'EA_NAME', 'EA_CODE': 'EA_CODE', 'FIRST_ID': 'FIRST_ID', 'FIRST_SA_C': 'FIRST_SA_C', 'W_02_FIRST': 'W_02_FIRST', 'W_02_FIR_1': 'W_02_FIR_1', 'W_02_FIR_2': 'W_02_FIR_2', 'W_02_FIR_3': 'W_02_FIR_3', 'W_02_FIR_4': 'W_02_FIR_4', 'W_02_FIR_5': 'W_02_FIR_5', 'Sheet1__S_': 'Sheet1__S_', 'Sheet1__Re': 'Sheet1__Re', 'Sheet1__Zo': 'Sheet1__Zo', 'Sheet1__Wo': 'Sheet1__Wo', 'Sheet1__He': 'Sheet1__He', 'HF_Name': 'HF_Name', 'HF_Type': 'HF_Type', 'X1': 'X1', 'N': 'N', 'E': 'E', 'Z': 'Z', 'owner': 'owner', 'Status': 'Status', 'X_1': 'X_1', 'y_1': 'y_1', 'Region_1': 'Region_1', 'Zone_1': 'Zone_1', 'Woreda_1': 'Woreda_1', });
lyr_AddisAbabakk14_0.set('fieldImages', {'R_NAME': 'TextEdit', 'R_CODE': 'Range', 'Z_NAME': 'TextEdit', 'Z_CODE': 'Range', 'T_NAME': 'TextEdit', 'T_CODE': 'Range', 'KK_NAME': 'TextEdit', 'KK_CODE': 'Range', 'COUNT': 'TextEdit', 'Area_ha': 'TextEdit', 'Pop': 'Range', });
lyr_Selected_Health_Centers_West_3.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID_2': 'TextEdit', 'X': 'TextEdit', 'y': 'TextEdit', 'Type': 'TextEdit', 'Name': 'TextEdit', 'No': 'TextEdit', 'OBJECTID': 'TextEdit', 'Id': 'TextEdit', 'Embassy_Co': 'TextEdit', 'TOWNG_': 'TextEdit', 'TOWNG_ID': 'TextEdit', 'Rank': 'Range', 'Name2': 'TextEdit', 'S_N': 'TextEdit', 'Region': 'TextEdit', 'Zone': 'TextEdit', 'Woreda': 'TextEdit', 'Health_cen': 'TextEdit', 'R_NAME': 'TextEdit', 'R_CODE': 'Range', 'Z_NAME': 'TextEdit', 'Z_CODE': 'TextEdit', 'W_NAME': 'TextEdit', 'W_CODE': 'TextEdit', 'COUNT': 'TextEdit', 'Area_in_he': 'TextEdit', 'ORIG_FID': 'TextEdit', 'RK_NAME': 'TextEdit', 'RK_CODE': 'TextEdit', 'T_NAME': 'TextEdit', 'T_CODE': 'TextEdit', 'Area_ha': 'TextEdit', 'FIRST_R_NA': 'TextEdit', 'FIRST_R_CO': 'Range', 'FIRST_Z_NA': 'TextEdit', 'FIRST_Z_CO': 'TextEdit', 'FIRST_W_NA': 'TextEdit', 'FIRST_W_CO': 'TextEdit', 'FIRST_T_NA': 'TextEdit', 'FIRST_T_CO': 'Range', 'FIRST_RK_N': 'TextEdit', 'SA_CODE': 'Range', 'EA_NAME': 'TextEdit', 'EA_CODE': 'TextEdit', 'FIRST_ID': 'TextEdit', 'FIRST_SA_C': 'Range', 'W_02_FIRST': 'TextEdit', 'W_02_FIR_1': 'Range', 'W_02_FIR_2': 'TextEdit', 'W_02_FIR_3': 'TextEdit', 'W_02_FIR_4': 'TextEdit', 'W_02_FIR_5': 'TextEdit', 'Sheet1__S_': 'TextEdit', 'Sheet1__Re': 'TextEdit', 'Sheet1__Zo': 'TextEdit', 'Sheet1__Wo': 'TextEdit', 'Sheet1__He': 'TextEdit', 'HF_Name': 'TextEdit', 'HF_Type': 'TextEdit', 'X1': 'TextEdit', 'N': 'TextEdit', 'E': 'TextEdit', 'Z': 'TextEdit', 'owner': 'TextEdit', 'Status': 'TextEdit', 'X_1': 'TextEdit', 'y_1': 'TextEdit', 'Region_1': 'TextEdit', 'Zone_1': 'TextEdit', 'Woreda_1': 'TextEdit', });
lyr_AddisAbabakk14_0.set('fieldLabels', {'R_NAME': 'no label', 'R_CODE': 'no label', 'Z_NAME': 'no label', 'Z_CODE': 'no label', 'T_NAME': 'no label', 'T_CODE': 'no label', 'KK_NAME': 'no label', 'KK_CODE': 'no label', 'COUNT': 'no label', 'Area_ha': 'no label', 'Pop': 'no label', });
lyr_Selected_Health_Centers_West_3.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID_2': 'no label', 'X': 'no label', 'y': 'no label', 'Type': 'no label', 'Name': 'no label', 'No': 'no label', 'OBJECTID': 'no label', 'Id': 'no label', 'Embassy_Co': 'no label', 'TOWNG_': 'no label', 'TOWNG_ID': 'no label', 'Rank': 'no label', 'Name2': 'no label', 'S_N': 'no label', 'Region': 'no label', 'Zone': 'no label', 'Woreda': 'no label', 'Health_cen': 'no label', 'R_NAME': 'no label', 'R_CODE': 'no label', 'Z_NAME': 'no label', 'Z_CODE': 'no label', 'W_NAME': 'no label', 'W_CODE': 'no label', 'COUNT': 'no label', 'Area_in_he': 'no label', 'ORIG_FID': 'no label', 'RK_NAME': 'no label', 'RK_CODE': 'no label', 'T_NAME': 'no label', 'T_CODE': 'no label', 'Area_ha': 'no label', 'FIRST_R_NA': 'no label', 'FIRST_R_CO': 'no label', 'FIRST_Z_NA': 'no label', 'FIRST_Z_CO': 'no label', 'FIRST_W_NA': 'no label', 'FIRST_W_CO': 'no label', 'FIRST_T_NA': 'no label', 'FIRST_T_CO': 'no label', 'FIRST_RK_N': 'no label', 'SA_CODE': 'no label', 'EA_NAME': 'no label', 'EA_CODE': 'no label', 'FIRST_ID': 'no label', 'FIRST_SA_C': 'no label', 'W_02_FIRST': 'no label', 'W_02_FIR_1': 'no label', 'W_02_FIR_2': 'no label', 'W_02_FIR_3': 'no label', 'W_02_FIR_4': 'no label', 'W_02_FIR_5': 'no label', 'Sheet1__S_': 'no label', 'Sheet1__Re': 'no label', 'Sheet1__Zo': 'no label', 'Sheet1__Wo': 'no label', 'Sheet1__He': 'no label', 'HF_Name': 'no label', 'HF_Type': 'no label', 'X1': 'no label', 'N': 'no label', 'E': 'no label', 'Z': 'no label', 'owner': 'no label', 'Status': 'no label', 'X_1': 'no label', 'y_1': 'no label', 'Region_1': 'no label', 'Zone_1': 'no label', 'Woreda_1': 'no label', });
lyr_Selected_Health_Centers_West_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});