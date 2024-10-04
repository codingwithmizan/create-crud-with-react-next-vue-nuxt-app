import axios from "axios";

export const getData = async (url: string) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/${url}`);
    if (!res.ok) {
      return null;
    }
    return res.json();
  } catch (error) {
    console.log("something went wrong");
  }
};

export const postData = async (url: string, data: any) => {
  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/${url}`,
      data
    );
    if (res.status === 201 || res.status === 200) {
      return res.data;
    } else {
      return null;
    }
  } catch (error) {
    console.log("something went wrong");
  }
};

export const updateData = async (url: string, data: any) => {
  try {
    const res = await axios.put(
      `${process.env.NEXT_PUBLIC_BASE_URL}/${url}`,
      data
    );
    if (res.status === 201 || res.status === 200) {
      return res.data;
    } else {
      return null;
    }
  } catch (error) {
    console.log("something went wrong");
  }
};

export const deleteData = async (url: string) => {
  try {
    const res = await axios.delete(`${process.env.NEXT_PUBLIC_BASE_URL}/${url}`);
    if (res.status === 200) {
      return res.data;
    } else {
      return null;
    }
  } catch (error) {
    console.log("something went wrong");
  }
};
