class Api::VideosController < ApplicationController

    def index 
        if params[:userId]
            @videos = Video.where(uploader_id: params[:userId])
        else 
             @videos = Video.all 
        end
    end

    def show 
        @video = Video.find(params[:id])
    end 

    def create
        @video = Video.new(video_params)
        @video.uploader_id = current_user.id
        if @video.save   
            render :show  
        else  
            render json: @video.errors.full_messages, status:422
        end 
    end 

    def update 
        @video = Video.find_by(id: params[:id])
        if @video.update(video_params)
            render :show
        else 
            render json: @video.errors.full_messages, status: 422
        end
    end 

    def destroy 
        @video = Video.find_by(id: params[:id])
        @video.destroy
    end

    def search
        if params[:query].present?
            @videos = Video.where("title LIKE ?", "%#{params[:query]}%")
        else  
            @videos = Video.none
        end
    end


    private 
    
    def video_params
        params.require(:video).permit(:id, :title, :description, :file, :thumbnail)
    end
end
