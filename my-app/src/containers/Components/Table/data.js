const headRows = [
  {
    id: "name",
    numeric: false,
    disablePadding: true,
    label: "Dessert (100g serving)"
  },
  { id: "calories", numeric: true, disablePadding: false, label: "Calories" },
  { id: "fat", numeric: true, disablePadding: false, label: "Fat (g)" },
  { id: "carbs", numeric: true, disablePadding: false, label: "Carbs (g)" },
  { id: "protein", numeric: true, disablePadding: false, label: "Protein (g)" }
];

const data = [
    {"name": "Cupcake", "calories": 305, "fat": 3.7, "carbs": 67, "protein": 4.3},
    {"name": "Donut", "calories": 452, "fat": 25.0, "carbs": 51, "protein": 4.9},
    {"name": "Eclair", "calories": 262, "fat": 16.0, "carbs": 24, "protein": 6.0},
    {"name": "Frozen yoghurt", "calories": 159, "fat": 6.0, "carbs": 24, "protein": 4.0},
    {"name": "Gingerbread", "calories": 356, "fat": 16.0, "carbs": 49, "protein": 3.9},
    {"name": "Honeycomb", "calories": 408, "fat": 3.2, "carbs": 87, "protein": 6.5},
    {"name": "Ice cream sandwich", "calories": 237, "fat": 9.0, "carbs": 37, "protein": 4.3},
    {"name": "KitKat", "calories": 518, "fat": 26.0, "carbs": 65, "protein": 7.0},
    {"name": "Lollipop", "calories": 392, "fat": 0.2, "carbs": 98, "protein": 0.0},
    {"name": "Marshmallow", "calories": 318, "fat": 0, "carbs": 81, "protein": 2.0},
  ];

export { headRows, data };