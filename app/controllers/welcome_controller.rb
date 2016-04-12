class WelcomeController < ApplicationController
  def index
  	@homestate = "Georgia"
  	@countries = ["Germany", "Australia", "Switzerland"]
		@images = ["bavaria2.jpg", "llamas.jpg", "alps.jpg", "kangaroo.jpg"]
		@image_hash = {"Bavaria" => "bavaria2.jpg", "Llamas" => "llamas.jpg",
								"Alps" => "alps.jpg", "Kangaroo" => "kangaroo.jpg"}

  end

  def about
  	@color = params[:color]
  	@size = params[:size].to_i
  end
end
