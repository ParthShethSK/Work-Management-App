import {
  Client,
  Account,
  Storage,
  Databases,
  Query,
  Functions,
  Avatars,
} from "appwrite";

//--------------------------------------------- SDK Setup ---------------------------------------------//
const client = new Client();
client
  .setEndpoint(
    process.env.APPWRITE_ENDPOINT || "https://backend.myconsilium.tech/v1"
  ) // Your API Endpoint
  .setProject(process.env.APPWRITE_PROJECT_ID || "6342c2fd04e166465934"); // Your project ID

const account = new Account(client);
const storage = new Storage(client);
const databases = new Databases(client, "6303990a2c1bbfb8ad1c");
const avatars = new Avatars(client);
//--------------------------------------------- Avatars ---------------------------------------------//
const avatar = avatars.getInitials();
//--------------------------------------------- Accounts ---------------------------------------------//
const authUser = async (user) => {
  const promise = await account.createEmailSession(user.email, user.password);
  return promise;
};

const verifyCurrentUser = async (session_id) => {
  const promise = await account.getSession(session_id);
  return promise;
};

const getCurrentUser = async () => {
  const promise = await account.get();
  return promise;
};

const updateUsername = async (name) => {
  try {
    const promise = account.updateName(name);
  } catch (err) {
    return err;
  }
  return "Successfully updated username";
};

const updatePassword = async (password) => {
  try {
    const promise = account.updateName(password);
  } catch (err) {
    return err;
  }
  return "Successfully updated password";
};
//---------------------------------------------Storage buckets---------------------------------------------//
const addToStorage = async (file, type) => {
  try {
    const promise = await storage.createFile(
      type === "image" ? "63036a0e8745eb1d273c" : "630d073858785919de38",
      "unique()",
      file
    );
  } catch (err) {
    return err;
  }
  return "Successfully uploaded";
};

const removeFromStorage = async () => {
  try {
    const promise = await storage.removeFile(
      "63036a0e8745eb1d273c",
      "unique()"
    );
  } catch (err) {
    return err;
  }
  return "Successfully uploaded";
};

const listCertificatesInStorage = async () => {
  try {
    const promise = storage.listFiles("63036a0e8745eb1d273c");
    return promise;
  } catch (err) {
    return err;
  }
};

const getFileInStorage = async () => {
  try {
    const promise = await storage.getFileView(
      "63036a0e8745eb1d273c",
      "6343c5496d2728f1f019"
    );
    return promise;
  } catch (err) {
    return err;
  }
};
//--------------------------------------------- Database ---------------------------------------------//
const addRecordsToDatabase = async (type, data, eventID) => {
  try {
    const promise = databases.createDocument(
      type === "record" ? "630399252488d1e041a5" : "63178f24912794614ba0",
      eventID,
      data
    );
    return promise;
  } catch (err) {
    return err;
  }
};

const deleteRecordsInDatabase = async (type, eventID) => {
  try {
    const promise = databases.deleteDocument(
      type === "record" ? "630399252488d1e041a5" : "63178f24912794614ba0",
      eventID
    );
    return promise;
  } catch (err) {
    return err;
  }
};

const listRecordsInDatabase = (pageNo) => {
  try {
    const res = databases.listDocuments(
      "630399252488d1e041a5", // collectionId
      [], // queries
      10, // limit
      0 * pageNo, // offset
      "1", // cursor
      "after", // cursorDirection
      ["date"], // orderAttributes
      ["ASC"] // orderTypes
    );
    return res;
  } catch (err) {
    return err;
  }
};

const fetchRecordByID = (type, eventID) => {
  try {
    const res = databases.getDocument(
      type === "record" ? "630399252488d1e041a5" : "63178f24912794614ba0",
      eventID
    );
    return res;
  } catch (err) {
    return err;
  }
};

//--------------------------------------------- Functions ---------------------------------------------//

const functions = new Functions(client);

//--------------------------------------------- Exports ---------------------------------------------//
export default account;
export {
  authUser,
  getCurrentUser,
  verifyCurrentUser,
  addToStorage,
  removeFromStorage,
  listCertificatesInStorage,
  getFileInStorage,
  listRecordsInDatabase,
  addRecordsToDatabase,
  deleteRecordsInDatabase,
  fetchRecordByID,
  storage,
  functions,
  avatar,
  updateUsername,
  updatePassword,
};
