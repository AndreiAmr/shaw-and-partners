import http from "../packages/axios";

export const importFile = async (file: File): Promise<boolean | Error> => {
  try {
    const form = new FormData();
    const fileBlob = new Blob([file], { type: "text/csv" });

    form.append("file", fileBlob, `${file.name}.csv`);

    await http.post("/api/files", form, {});
    return true;
  } catch (err) {
    throw new Error(String(err));
  }
};
