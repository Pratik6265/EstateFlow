class Api::V1::AuthController < ApplicationController
    def signup
        user = User.new(user_params)
        if user.save
            render json: { message: 'User created successfully' }, status: :created
        else
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def login
        user = User.find_by(email: params[:email])
        if user&.authenticate(params[:password])
            payload = { user_id: user.id, exp: ENV['JWT_EXPIRES_IN'].to_i }
            token = JWT.encode(payload, ENV['JWT_SECRET'], 'HS256')
            render json: { token: token }, status: :ok
        else
            render json: { error: 'Invalid email or password' }, status: :unauthorized
        end
    end

    private

    def user_params
        params.require(:user).permit(:name, :email, :password, :password_confirmation, :phone)
    end
end
