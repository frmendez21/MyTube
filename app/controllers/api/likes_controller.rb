class Api::LikesController < ApplicationController

    def index 
        @likes = Like.where(video_id: params[:video_id])
    end 

    def show 
        @like = Like.find_by(id: params[:id])
    end

    def create
        @like = Like.new(like_params)
        if @like.save
            render :show
        else  
            render json: @like.errors.full_messages, status: 422
        end
    end 

    def update 
        @like = Like.find_by(id: params[:id])
        if @like.is_like? === true
            @like.update(is_like?: false)
            render :show
        elsif @like.is_like? === false
            @like.update(is_like?: true)
            render :show
        else  
            render json: @like.errors.full_messages, status: 422
        end
    end 

    def destroy 
        @like = Like.find_by(id: params[:id])
        if @like 
            @like.destroy()
            render :show 
        else  
            render json @like.errors.full_messages, status: 422
        end
    end


    private 
    def like_params
        params.require(:like).permit(:is_like?, :liker_id, :video_id)
    end
end