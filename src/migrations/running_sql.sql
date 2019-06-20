DELETE FROM wrf.product_details WHERE q_fk in (314,315,316);
DELETE FROM wrf.question WHERE q_id in (314,315,316);
UPDATE wrf.question
    SET text = 'Length', short_name = 'cab_lngth', topic = 'Cabinet Length', tooltip = 'enter length for cabinet'
    WHERE q_id = 311;
UPDATE wrf.question
SET text = 'Width', short_name = 'cab_wdth', topic = 'Cabinet Width', tooltip = 'enter width for cabinet'
WHERE q_id = 312;
UPDATE wrf.question
SET text = 'Height', short_name = 'cab_height', topic = 'Cabinet Height', tooltip = 'enter height for cabinet'
WHERE q_id = 313;
UPDATE wrf.question
SET text = 'Width'
WHERE q_id = 324;

UPDATE wrf.question SET unique_dim = 'cab_2' where short_name in ('cab_height_2', 'cab_lngth_2', 'cab_wdth_2');

INSERT INTO wrf.question (text, short_name, topic, tooltip, instructions, datatype, is_active, created_by, updated_by, cat_fk, `grouping`, unique_dim)
VALUES
('Length', 'cab_lngth_3', 'length', 'enter a length', '', 'number', 1, 'admin', 'admin', 10, 4, 'cab_3'),
('Width', 'cab_wdth_3', 'width', 'enter a width', '', 'number', 1, 'admin', 'admin', 10, 4, 'cab_3'),
('Height', 'cab_height_3', 'height', 'enter a height', '', 'number', 1, 'admin', 'admin', 10, 4, 'cab_3'),
('Length', 'cab_lngth_4', 'length', 'enter a length', '', 'number', 1, 'admin', 'admin', 10, 5, 'cab_4'),
('Width', 'cab_wdth_4', 'width', 'enter a width', '', 'number', 1, 'admin', 'admin', 10, 5, 'cab_4'),
('Height', 'cab_height_4', 'height', 'enter a height', '', 'number', 1, 'admin', 'admin', 10, 5, 'cab_4');
UPDATE wrf.question
SET unique_dim = 'cab_1'
WHERE short_name in ('cab_lngth', 'cab_wdth', 'cab_height');
UPDATE wrf.question
SET unique_dim = 'top_1'
WHERE short_name in ('top_lngth', 'top_wdth');
INSERT INTO wrf.question (text, short_name, topic, tooltip, instructions, datatype, is_active, created_by, updated_by, cat_fk, `grouping`, unique_dim)
VALUES
('Quantity', 'top_quantity', 'quantity', 'enter a quantity', '', 'number', 1, 'admin', 'admin', 5, 1, '');
INSERT INTO wrf.question (text, short_name, topic, tooltip, instructions, datatype, is_active, created_by, updated_by, cat_fk, `grouping`, unique_dim)
VALUES
('Length', 'top_lngth_2', 'length', 'enter a length', '', 'number', 1, 'admin', 'admin', 5, 4, 'top_2'),
('Width', 'top_wdth_2', 'width', 'enter a width', '', 'number', 1, 'admin', 'admin', 5, 4, 'top_2');
UPDATE wrf.question
SET `grouping` = 2
WHERE unique_dim = 'top_1';
UPDATE wrf.question
SET `grouping` = 3
WHERE unique_dim = 'top_2';