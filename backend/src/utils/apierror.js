class ApiError extends Error{
    constructor(
        statusCode,
        message:"something went wrong",
        error=[],
        statck=""
    ){
        super(message)
        this.statusCode=statusCode
        this.data=null
        this.message=message
        this.sucess=false
        this.errors=errors

        if(stack){
            this.stack=stactck
        }
    }
}
export {ApiError}