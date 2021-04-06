class Api::UsersController < ApplicationController
    def show 
        @user = User.find_by(selected_user)
    end 

    def create 
        @user = User.new(user_params)
        if @user.save 
            login!(@user)
            render :show
        else 
            render json: @user.errors.full_messages, status: 401
        end 
    end 

    def update 
        @user = selected_user
        if @user && @user.update(uper_params)
            render  :show
        else 
            render json: @user.errors.full_messages, status: 401
        end
    end 

    def destroy 
       @user = selected_user 
        if @user
            @user.destroy
            render :show
        else
            render ['Could not find user']
        end
    end 

    private
    def selected_user 
        User.find_by(params[:id])
    end
    def user_params
        params.require(:user).permit(:username, :email, :password)
    end
end
