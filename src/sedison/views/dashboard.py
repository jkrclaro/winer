from flask import Blueprint, render_template, redirect, url_for
from flask_login import login_required, current_user

dashboard_bp = Blueprint('dashboard', __name__)


@dashboard_bp.route('/dashboard')
@login_required
def index():
    if not current_user.merchant:
        return redirect(url_for('merchant.setup'))

    return render_template('dashboard/index.html')