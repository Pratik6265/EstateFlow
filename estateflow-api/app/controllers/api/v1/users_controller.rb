class Api::V1::UsersController < ApplicationController
    def index
        render json: { message: "List of users" }
    end
end
