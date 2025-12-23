module JsonWebToken
  SECRET_KEY = ENV['JWT_SECRET'] || 'default-secret-key'

  def encode_token(user_id)
    payload = {
      user_id: user_id,
      exp: Time.current.to_i + ENV['JWT_EXPIRES_IN'].to_i
    }
    JWT.encode(payload, SECRET_KEY, 'HS256')
  end

  def decode_token(token)
    begin
      payload = JWT.decode(token, SECRET_KEY, true, algorithm: 'HS256')[0]
      HashWithIndifferentAccess.new(payload)
    rescue JWT::ExpiredSignature
      nil
    rescue JWT::InvalidSignature
      nil
    rescue JWT::DecodeError
      nil
    end
  end
end
