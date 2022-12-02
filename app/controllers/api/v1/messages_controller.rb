class Api::V1::MessagesController < Api::V1::ApplicationController
  def index
    @messages = Greeting.order('RANDOM()').limit(1)
    render json: @messages
  end
end
