class Api::MenusController < ApplicationController
  
  before_action :set_eatery
  
  def index
    eatery = Eatery.find(params[:eatery_id])
    render json: eatery.menus.all
  end

  def show
    menu = @eatery.menus.find(params[:id])
    render json: menu
  end 

  def create
    menu = @eatery.menus.new(menu_params)
    if menu.save
      render json: menu
    else
      render json: { errors: item.errors }, status: :unprocessable_entity
    end
  end

  def update
    menu = @eatery.menus.find(params[:id])
    if menu.update(menu_params)
      render json: menu
    else
      render json: { errors: item.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    menu = @eatery.menus.find(params[:id]).destroy
    render json: menu
  end

  private

  def set_eatery 
    @eatery = Eatery.find(params[:eatery_id])
  end

  def menu_params
    params.require(:menu).permit(:category, :rating, :eatery_id)
  end
end
