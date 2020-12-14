class Api::EateriesController < ApplicationController
  def index
    render json: Eatery.all
  end
end
