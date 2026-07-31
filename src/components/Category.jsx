function Category({
  selectedCategory,
  setSelectedCategory
}) {

  const categories = [
    {
      name: "All",
      emoji: "🛒"
    },
    {
      name: "Fruits",
      emoji: "🍎"
    },
    {
      name: "Vegetables",
      emoji: "🥦"
    },
    {
      name: "Dairy",
      emoji: "🥛"
    },
    {
      name: "Snacks",
      emoji: "🍪"
    },
    {
      name:
        "Daily Essentials",
      emoji: "🛍️"
    }
  ];

  return (
    <section className="category">

      <h2>
        Shop by Category
      </h2>

      <div className="category-list">

        {categories.map(
          (category) => (

            <div
              key={
                category.name
              }
              onClick={() =>
                setSelectedCategory(
                  category.name
                )
              }
              className={
                selectedCategory ===
                category.name
                  ? "category-card active"
                  : "category-card"
              }
            >

              <div>
                {category.emoji}
              </div>

              <h3>
                {category.name}
              </h3>

            </div>

          )
        )}

      </div>

    </section>
  );
}

export default Category;