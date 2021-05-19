class Api::CommentsController < ApplicationController
    def create 
        @comment = Comment.new(comment_params)
        if @comment.save 
            render :show
        else 
            render json: @comment.errors.full_messages, status: 422
        end
    end

    def show 
        @comment = Comment.find_by(id: params[:id])
    end 

    def index 
        @comments = Comment.where(video_id: params[:video_id])
    end

    def destroy 
        @comment = Comment.find_by(id: params[:id])
        if @comment
            @comment.destroy()
            render :show 
        else 
            render json: @comment.errors.full_messages, status: 422
        end
    end

    def update 
        @comment = Comment.find_by(id: params[:id])
        if @comment 
            @comment.update(body: params[:body])
            render :show 
        else  
            render json @comment.errors.full_messages, status: 422
        end
    end

    private 
    def comment_params 
        params.require(:comment).permit(:body, :video_id, :commenter_id)
    end
end
