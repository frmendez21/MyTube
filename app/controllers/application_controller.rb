class ApplicationController < ActionController::Base
    helper_method :current_user, :logged_in?
     protect_from_forgery unless: -> { request.format.json? }
    def current_user 
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def login!(user)
        session[:session_token] = user.reset_session_token!
        @current_user = user
    end

    def logout!
        current_user.reset_session_token!
        session[:session_token] = nil 
        @current_user = nil 
    end 

    def logged_in?
        !!current_user
    end

    def require_logged_in
        redirect_to root unless logged_in?
    end
end
