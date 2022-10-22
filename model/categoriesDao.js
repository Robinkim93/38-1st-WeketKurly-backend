const myDataSource = require("../util/dataSource");

const getMainCategoriesAllProducts = async (maincategoriesId) => {
  return await myDataSource.query(
    `
      SELECT 
      p.name AS productName,
      p.thumnail_image_url AS thumbnailImageUrl,
      p.short_description AS shortDescription,
      p.price AS productPrice
      FROM products AS p
      INNER JOIN sub_categories AS sc ON p.sub_category_id = sc.id
      INNER JOIN categories AS c ON sc.category_id = c.id
      WHERE c.id = ?
      `,
    [maincategoriesId]
  );
};

const getSubCategoriesAllProducts = async (subcategoriesId) => {
  return await myDataSource.query(
    `
      SELECT 
      p.name AS productName,
      p.thumnail_image_url AS thumbnailImageUrl,
      p.short_description AS shortDescription,
      p.price AS productPrice
      FROM products AS p
      INNER JOIN sub_categories AS sc ON p.sub_category_id = sc.id
      INNER JOIN categories AS c ON sc.category_id = c.id
      WHERE sc.id = ?
      
      `,
    [subcategoriesId]
  );
};

module.exports = { getMainCategoriesAllProducts, getSubCategoriesAllProducts };
