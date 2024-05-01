import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userName";



connect();

export default async function handler(request , response) {
  try {

    
    const searchTerm = request.query.name;
    let names;
    if (!searchTerm) {
      names = await User.find({});
    } else {
      const searchRegex = new RegExp(searchTerm, "i");
      
      names = await User.find({ user_name: { $regex: searchRegex } });
    }
    return response.json(names);
  } catch (error) {
        return response.json({error: error.message})
  }
}
