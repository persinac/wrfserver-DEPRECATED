/**
This will reset all form related data and clear product data...
Run at your own risk
**/
update wrf.category set belongs_to = 3 where category_id = 10;
-- reset product details
delete from wrf.product_details where pd_id > 0;
ALTER TABLE wrf.product_details AUTO_INCREMENT = 1;
-- reset product header
delete from wrf.product_header where ph_id > 0;
ALTER TABLE wrf.product_header AUTO_INCREMENT = 1;
-- reset questions
delete from wrf.question where q_id > 0;
ALTER TABLE wrf.question AUTO_INCREMENT = 1;
-- reset ref_pricing_matrix
delete from wrf.ref_pricing_matrix where pm_id > 0;
ALTER TABLE wrf.ref_pricing_matrix AUTO_INCREMENT = 1;