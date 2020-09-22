var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_sectores_1 = new ol.format.GeoJSON();
var features_sectores_1 = format_sectores_1.readFeatures(json_sectores_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sectores_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sectores_1.addFeatures(features_sectores_1);
var lyr_sectores_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_sectores_1, 
                style: style_sectores_1,
                interactive: true,
                title: '<img src="styles/legend/sectores_1.png" /> sectores'
            });
var format_manzanas_2 = new ol.format.GeoJSON();
var features_manzanas_2 = format_manzanas_2.readFeatures(json_manzanas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_manzanas_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_manzanas_2.addFeatures(features_manzanas_2);
var lyr_manzanas_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_manzanas_2, 
                style: style_manzanas_2,
                interactive: true,
    title: 'manzanas<br />\
    <img src="styles/legend/manzanas_2_0.png" /> SECTOR 1<br />\
    <img src="styles/legend/manzanas_2_1.png" /> SECTOR 18<br />\
    <img src="styles/legend/manzanas_2_2.png" /> SECTOR 2<br />\
    <img src="styles/legend/manzanas_2_3.png" /> SECTOR 3<br />\
    <img src="styles/legend/manzanas_2_4.png" /> SECTOR 4<br />\
    <img src="styles/legend/manzanas_2_5.png" /> SECTOR 7<br />\
    <img src="styles/legend/manzanas_2_6.png" /> SECTOR 8<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_sectores_1.setVisible(true);lyr_manzanas_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_sectores_1,lyr_manzanas_2];
lyr_sectores_1.set('fieldAliases', {'cod_sector': 'cod_sector', 'perimetro': 'perimetro', 'numero': 'numero', 'area': 'area', 'imagen': 'imagen', });
lyr_manzanas_2.set('fieldAliases', {'cod_mz': 'cod_mz', 'cod_sector': 'cod_sector', });
lyr_sectores_1.set('fieldImages', {'cod_sector': 'TextEdit', 'perimetro': 'TextEdit', 'numero': 'TextEdit', 'area': 'TextEdit', 'imagen': 'ExternalResource', });
lyr_manzanas_2.set('fieldImages', {'cod_mz': 'Hidden', 'cod_sector': 'Hidden', });
lyr_sectores_1.set('fieldLabels', {'cod_sector': 'header label', 'perimetro': 'header label', 'numero': 'no label', 'area': 'inline label', 'imagen': 'no label', });
lyr_manzanas_2.set('fieldLabels', {});
lyr_manzanas_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});