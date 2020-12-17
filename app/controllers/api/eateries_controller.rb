class Api::EateriesController < ApplicationController
  def index
    render json: Eatery.all
  end

  def all_menus
    render json: Menu.all
  end

  def show
      eatery = Eatery.find(params[:id])
      render json: eatery
  end 

  def create
    eatery = Eatery.new(eatery_params)
    if eatery.save
      render json: eatery
    else
      render json: { errors: item.errors }, status: :unprocessable_entity
    end
  end

  def update
    eatery = Eatery.find(params[:id])
    if eatery.update(eatery_params)
      render json: eatery
    else
      render json: { errors: item.errors }, status: :unprocessable_entity
    end

  end

  def destroy
    eatery = Eatery.find(params[:id]).destroy
    render json: eatery
  end

  private

  def eatery_params
    params.require(:eatery).permit(:name, :category, :rating)
  end
end
