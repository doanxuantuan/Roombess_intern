import path from "path";
import multer from "multer";
import { fileURLToPath } from "url";

// Xử lý đường dẫn trong ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Cấu hình Multer để lưu ảnh vào "public/"
const storage = multer.diskStorage({
  destination: path.join(__dirname, "../public/"),
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage });

const users = [
  {
    id: 1,
    avatar: "/public/displaypic1.png",
    name: "Veronica Gastambide",
    age: "24",
    address: "Aubry, TX",
    country: "UAE",
    price: "750$",
    language: "English",
    model: "Model",
    character: "Extrovert",
    lookingfor:
      "Looking for a friendly, responsible roommate to share a clean and cozy space. Must be respectful of shared areas, open to communication, and easy-going. Bonus points if you're tidy, enjoy good conversations, or share similar interests. Let’s create a comfortable home together!",
    preference: {
      age: "20-30",
      smoking: "Outside only",
      Drinking: "Yes",
      StudentOnly: "No",
      Pets: "I don't mind",
    },
    lifestyle: {
      eating: "Vegetarian - don’t mind if you eat",
      drinking: "Teetotaler",
      smoking: "Non-Smoker",
      friend: "Sometimes",
      walk: "No",
    },
  },
  {
    id: 2,
    avatar: "/public/displaypic1.png",
    name: "Veronica Gastambideaaaa",
    age: "24",
    address: "Aubry, TX",
    country: "UAE",
    price: "750$",
    language: "English",
    model: "Model",
    character: "Extrovert",
    lookingfor:
      "Looking for a friendly, responsible roommate to share a clean and cozy space. Must be respectful of shared areas, open to communication, and easy-going. Bonus points if you're tidy, enjoy good conversations, or share similar interests. Let’s create a comfortable home together!",
    preference: {
      age: "20-30",
      smoking: "Outside only",
      Drinking: "Yes",
      StudentOnly: "No",
      Pets: "I don't mind",
    },
    lifestyle: {
      eating: "Vegetarian - don’t mind if you eat",
      drinking: "Teetotaler",
      smoking: "Non-Smoker",
      friend: "Sometimes",
      walk: "No",
    },
  },
];

export const getUsers = (req, res) => {
  res.json(users);
};
export const getUserById = (req, res) => {
  const { id } = req.params;
  const user = users.find((u) => u.id === parseInt(id));
  if (!user) {
    return res.status(404).json({ message: "Không tìm thấy người dùng!" });
  }
  res.json(user);
};

export const addUser = (req, res) => {
  console.log("Dữ liệu nhận được từ body:", JSON.stringify(req.body, null, 2));
  const {
    name,
    age,
    address,
    country,
    price,
    language,
    model,
    character,
    lookingfor,
  } = req.body;
  const preference = {
    age: req.body.preference?.age || "",
    smoking: req.body.preference?.smoking || "",
    Drinking: req.body.preference?.Drinking || "",
    StudentOnly: req.body.preference?.StudentOnly || "",
    Pets: req.body.preference?.Pets || "",
  };

  const lifestyle = {
    eating: req.body.lifestyle?.eating || "",
    drinking: req.body.lifestyle?.drinking || "",
    smoking: req.body.lifestyle?.smoking || "",
    friend: req.body.lifestyle?.friend || "",
    walk: req.body.lifestyle?.walk || "",
  };

  if (!name || !req.file || !preference || !lifestyle) {
    return res.status(400).json({ message: "Thiếu thông tin hoặc ảnh!" });
  }

  const newUser = {
    id: users.length + 1,
    avatar: `/public/${req.file.filename}`,
    name,
    age,
    address,
    country,
    price,
    language,
    model,
    character,
    lookingfor,
    preference,
    lifestyle,
  };
  users.push(newUser);
  res.status(201).json(newUser);
};
export { upload };
