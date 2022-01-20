class CommentsController < ApplicationController
  before_action :set_post

  def create
    @comment = @post.comments.create! params.required(:comment).permit(:commenter, :content)
    CommentsMailer.submitted(@comment).deliver_later
    redirect_to @post

    # TODO: validation
  end

  # TODO: why does destroy not broadcast?
  def destroy
    @comment = @post.comments.find(params[:id])
    @comment.destroy

    redirect_to post_path(@post), status: :see_other
  end

  private

  def set_post
    @post = Post.find(params[:post_id])
  end
end
