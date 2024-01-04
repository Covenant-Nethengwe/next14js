"use server"

import { revalidatePath } from "next/cache";
import { Post, User } from "./models";
import { connectToDb } from "./utils";
import { signIn, signOut } from "./auth";
import bcrypt from "bcryptjs";

export const addPost = async (previousState, formData) => {

  // const title = formData.get("title");
  // const description = formData.get("description");
  // const slug = formData.get("slug");
  // const userId = formData.get("userId");

  const { title, description, slug, userId } = Object.fromEntries(formData);

  try {

    connectToDb();
    const newPost = new Post({
      title,
      description,
      slug,
      userId
    },);

    console.log(newPost);

    await newPost.save();
    console.log("Saved to DB");
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (error) {
    return {
      error: "Something went wrong!"
    }
  }
}

// export const deletePost = async (id, formData) => {
export const deletePost = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();

    await Post.findByIdAndDelete(id);
    console.log("deleted from db");
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (error) {
    console.log(error);
    return {
      error: "Something went wrong!"
    }
  }
}

export const addUser = async (previousState, formData) => {

  const { username, email, password, img } = Object.fromEntries(formData);

  try {

    connectToDb();

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      hashPassword,
      img
    },);

    await newUser.save();
    console.log("Saved to DB");
    revalidatePath("/admin")
  } catch (error) {
    return {
      error: "Something went wrong!"
    }
  }
}

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();

    await Post.deleteMany({ userId: id })
    await User.findByIdAndDelete(id);
    console.log("deleted from db");
    revalidatePath("/admin")
  } catch (error) {
    console.log(error);
    return {
      error: "Something went wrong!"
    }
  }
}

export const handleGithubLogin = async () => {
  "use server"
  await signIn("github");
}

export const handleLogout = async () => {
  "use server"
  await signOut();
}

export const register = async (previousState, formData) => {
  console.log(formData);
  const { username, email, img, password, confirmPassword } = Object.fromEntries(formData);

  if (password !== confirmPassword) {
    return {
      error: "Passwords do not match!"
    };
  }

  try {
    connectToDb();

    const user = await User.findOne({ username });

    if (user) {
      return {
        error: "User already exists!"
      };
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashPassword,
      img
    })

    await newUser.save()
    console.log("Saved to DB");

    return {
      success: true
    }
  } catch (error) {
    console.log(error);
    return {
      error: "Something went wrong"
    }
  }
}

export const login = async (previousState, formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
   await signIn("credentials", { username, password })
  } catch (error) {
    console.log("this here", error);

    if (error.message.includes("CredentialsSignin")) {
      return {
        error: "Invalid username or password."
      }
    }

    throw error;
  }
}

//function 100
//function 100
//async function 2000
//function 100
//function 100
