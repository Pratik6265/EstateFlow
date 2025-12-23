class Api::V1::AuthController < ApplicationController
  skip_before_action :authenticate_request!, only: [:signup, :login]

  def signup
    user = User.new(user_params)
    if user.save
      token = encode_token(user.id)
      render json: {
        message: 'User created successfully',
        token: token,
        user: { id: user.id, name: user.name, email: user.email, phone: user.phone }
      }, status: :created
    else
      render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def login
    user = User.find_by(email: params[:email])
    if user&.authenticate(params[:password])
      token = encode_token(user.id)
      render json: {
        token: token,
        user: { id: user.id, name: user.name, email: user.email, phone: user.phone }
      }, status: :ok
    else
      render json: { error: 'Invalid email or password' }, status: :unauthorized
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :password, :password_confirmation, :phone)
  end
end
