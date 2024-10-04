module Api
  module V1
    class UsersController < ApplicationController

      def index

        page = (params[:page] || 1).to_i
        per_page = (params[:per_page] || 5).to_i

        if params[:query].present?
          users = User.where("first_name LIKE ?", "%#{params[:query]}%").page(page).per(per_page)
        else
          users = User.page(page).per(per_page)
        end

        render json: {
          success: true,
          message: "fetch users successfully",
          data: users
        },
        status: 200

      rescue Exception => ex 
        render json: {message: ex.message}, status: 500

      end


      def show

        user = User.find(params[:id])
        render json: {
          success: true,
          message: "fetch users successfully",
          data: user
        },
        status: 200

      rescue Exception => ex 
        render json: {message: ex.message}, status: 500

      end

      def create
        user = User.new(user_params)
        if user.save!
          render json: {
            success: true,
            message: "create user successfully",
            data: user
          },
          status: 201
        end
      rescue Exception => ex 
        render json: {message: ex.message}, status: 500

      end

      def update
        user = User.find(params[:id])
        if user.update!(user_params)
          render json: {
            success: true,
            message: "upadte user successfully",
            data: user
          },
          status: 200
        end
      rescue Exception => ex 
        render json: {message: ex.message}, status: 500
        
      end

      def destroy
        user = User.find(params[:id])
        if user.destroy!
          render json: {
            success: true,
            message: "destroy user successfully",
            data: user
          },
          status: 200
        end
      rescue Exception => ex 
        render json: {message: ex.message}, status: 500
        
      end


      private

     def user_params
      params.require(:user).permit(:first_name, :last_name, :age, :gender)
     end

    end
  end
end
