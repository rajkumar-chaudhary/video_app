const asyncHandler =  (requestHandler) =>  {
 (req,res,next) => {
    Promise.resolve(requestHandler(req,res,next)).catch((err)=>next(err))
  }
}

export {asyncHandler}


//try catch valaa
// const asyncHandler =(fn)=> async (req,res,next) => {
//     try {
//         await fn(req,res,next)
//     } catch (e) {
//         res.status(e.status || 500).json({
//             success:false,
//             message:e.message})
//     }
// }

