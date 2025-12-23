class ApplicationController < ActionController::API
  include JsonWebToken

  before_action :authenticate_request!, except: [:login, :signup]
  attr_reader :current_user

  private

  def authenticate_request!
    token = extract_token_from_header
    unless token
      render json: { error: 'Missing authorization token' }, status: :unauthorized
      return
    end

    decoded = decode_token(token)
    if decoded
      @current_user = User.find_by(id: decoded[:user_id])
      render json: { error: 'User not found' }, status: :unauthorized unless @current_user
    else
      render json: { error: 'Invalid or expired token' }, status: :unauthorized
    end
  end

  def extract_token_from_header
    authorization = request.headers['Authorization']
    return nil unless authorization

    authorization.split(' ').last
  end
end
