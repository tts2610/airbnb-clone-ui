import React, { Component } from "react";

export default class AddExperiences extends Component {
  render() {
    return (
      <div>
        <div class="box-content">
                <a href="#" class="button button-facebook">Sign up with Facebook</a>
                <div class="seperator">
                    <hr class="custom" />
                    <div>or</div>
                    <hr class="custom" />
                </div>
                <div class="custom-h2">Sign up with your email address</div>
                <form>
                <div class="form-group">
                        <input type="email" class="form-control form-control-lg" id="exampleInputEmail1" placeholder="Email">
                    </div>
                    <div class="form-group">
                        <input type="email" class="form-control form-control-lg" id="exampleInputPassword1" placeholder="Confirm Email">
                    </div>
                    <div class="form-group">
                        <input type="password" class="form-control form-control-lg" id="exampleInputPassword1" placeholder="Password">
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control form-control-lg" id="exampleInputPassword1" placeholder="What should we call you?">
                    </div>
                    <label>Date of Birth</label>
                    <div class="form-row mb-3">
                        <div class="col-3">
                            <input type="text" class="form-control" placeholder="Date">
                        </div>
                        <div class="col-5">
                            <select id="inputState" class="form-control">
                                <option selected>Month</option>
                                <option>January</option>
                                <option>Febuary</option>
                                <option>March</option>
                                <option>April</option>
                                <option>May</option>
                                <option>June</option>
                                <option>July</option>
                                <option>August</option>
                                <option>September</option>
                                <option>October</option>
                                <option>November</option>
                                <option>December</option>
                              </select>
                        </div>
                        <div class="col-4">
                            <input type="text" class="form-control" placeholder="Year">
                        </div>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
                        <label class="form-check-label" for="inlineRadio1">Male</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
                        <label class="form-check-label" for="inlineRadio2">Female</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3">
                        <label class="form-check-label" for="inlineRadio3">Non-binary</label>
                    </div>
                    <div class="form-check mt-3">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1">
                        <label class="form-check-label" style="font-size: 13px;" for="exampleCheck1">Share my registration data with Spotify's content providers for marketing purposes.</label>
                    </div>
                    <img style="width: inherit;" src="https://www.cmnty.com/support/wp-content/uploads/2017/07/nocaptcha.gif">
                    <div class="term">
                        <p class="notice">By clicking on Sign up, you agree to Spotify's <a href="/vn-en/legal/end-user-agreement/" target="_blank">Terms and Conditions of Use</a>. <br><br>To learn more about how Spotify collects, uses, shares and protects your personal
                            data please read Spotify's <a href="/vn-en/legal/privacy-policy/" target="_blank">Privacy Policy</a>.</p>
                    </div>
                    <a href="#" class="button button-signup">Sign up</a>
                    <p class="primary">
                        Already have an account?
                        <a href="#">
                          Log in
                        </a>
                    </p>
                </form>
            </div>
      </div>
    );
  }
}
