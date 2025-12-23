class Api::V1::UsersController < ApplicationController
  def index
    users = User.select(:id, :name, :email, :phone, :created_at)
    render json: { users: users }, status: :ok
  end

  def show
    render json: { user: current_user }, status: :ok
  end
end
