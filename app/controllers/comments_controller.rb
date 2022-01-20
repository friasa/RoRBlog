class CommentsController < ApplicationController

  http_basic_authenticate_with name: 'dhh', password: 'secret', only: :destroy

  def create
    @post = Post.find(params[:post_id])
    @comment = @post.comments.create(comment_params)
    redirect_to post_path(@post)

    # TODO: figure out how to do validation
    # if @comment.save
    #   redirect_to post_path(@post)
    # else
    #   render 'posts/show', status: :unprocessable_entity
    # end
  end

  def destroy
    @post = Post.find(params[:post_id])
    @comment = @post.comments.find(params[:id])
    @comment.destroy

    redirect_to post_path(@post), status: :see_other
  end

  private

  def comment_params
    params.require(:comment).permit(:commenter, :body, :status)
  end

end
