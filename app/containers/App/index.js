/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import {
  Switch,
  Route,
  //BrowserRouter as Router,
  //Link,
  //Redirect,
  //withRouter
} from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'containers/Header';
import Footer from '../../components/Footer';
import EntryPage from 'containers/EntryPage/Loadable'
import LoginPage from 'containers/LoginPage/Loadable'
import OrderList from 'containers/OrderList/Loadable'
import LandPage from 'containers/LandPage/Loadable'
import ProductDetail from 'containers/ProductDetail/Loadable'
import Cart from 'containers/Cart/Loadable'
import CatPage from 'containers/CatPage/Loadable'
import CollectPage from 'containers/CollectPage/Loadable'
import FooterIntroPage from 'containers/IntroPage/Loadable'

import Order from 'containers/Order/Loadable'
import OrderSuccess from '../../components/NavPage/OrderSuccess'
import OrderError from '../../components/NavPage/OrderError'

import DevPage from '../../components/NavPage/DEV'


import Profile from 'containers/Profile/Loadable'
import OrderDetail from 'containers/OrderDetail/Loadable'

import AfterMarket from 'containers/AfterMarket/Loadable'
import SearchPage from 'containers/SearchPage/Loadable'
import StaticPage from 'containers/Static/Loadable'
import CouponPage from 'containers/Coupon/Loadable'

import AuthWrapper from 'containers/AuthWrapper'
import FetchWrapper from 'containers/FetchWrapper'
import QrcodePay from 'containers/QrcodePay/Loadable'

import ServiceTrain from '../Service/Train'
import ServiceLife from '../Service/Life'
import ServiceShouHou from '../Service/ShouHou'
import ServiceSaas from '../Service/Saas'




const AppWrapper = styled.div`
  width: '100%';
  min-height: 100%;
  padding: 0;
`;

const styles = {
  container: {
    margin: '0 auto',
    minHeight: window.innerHeight - 45
  }
}

import 'style.css'


export default function App(props) {
  return (
      <AuthWrapper {...props}>
        <FetchWrapper {...props}>
          <Header {...props} />
          <div style={styles.container} className="bs-webpage-body">
            <Switch>
              <Route exact path="/" component={EntryPage}/>
              <Route path="/features" component={FeaturePage}/>
              <Route path="/entry" component={EntryPage}/>
              <Route exact path="/login/:status" component={LoginPage}/>
              <Route exact path="/login" component={LoginPage}/>
              <Route path="/coupon" component={CouponPage}/>
              <Route exact path="/cats/:cat/:page" component={CatPage}/>
              <Route exact path="/collects/:page" component={CollectPage}/>
              <Route exact path="/orders/:page" component={OrderList}/>
              <Route path="/land" component={LandPage}/>
              <Route exact path="/productdetail/:id" component={ProductDetail}/>
              <Route path="/cart" component={Cart}/>
              <Route exact path="/order" component={Order}/>
              <Route exact path="/order/success" component={OrderSuccess}/>
              <Route exact path="/order/error/:id" component={OrderError}/>
              <Route exact path="/order/:id" component={OrderDetail}/>
              <Route exact path="/dev" component={DevPage}/>
              <Route path="/profile" component={Profile}/>
              <Route path="/aftermarket" component={AfterMarket}/>
              <Route exact  path="/search" component={SearchPage}/>
              <Route exact path="/search/:key" component={SearchPage}/>
              <Route path="/search/:key/:page" component={SearchPage}/>
              <Route exact path="/static/:key" component={StaticPage}/>
              <Route exact path="/intro" component={FooterIntroPage}/>
              <Route  path="/qrcode" component={QrcodePay}/>
              <Route exact path="/service/trainning" component={ServiceTrain}/>
              <Route exact path="/service/life" component={ServiceLife}/>
              <Route exact path="/service/shouhou" component={ServiceShouHou}/>
              <Route exact path="/service/saas" component={ServiceSaas}/>



              <Route path="" component={NotFoundPage}/>
            </Switch>
          </div>
          <Footer {...props}  />
        </FetchWrapper>
      </AuthWrapper>
  );
}
